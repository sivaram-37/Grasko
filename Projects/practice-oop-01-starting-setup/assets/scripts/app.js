class DOMHelper {
  static clearEventListners(element) {
    const clonedElement = element.cloneNode(true);
    element.replaceWith(clonedElement);
    return clonedElement;
  }

  static moveElement(elementId, newDestinationSelector) {
    const ele = document.getElementById(elementId);
    const destinationElement = document.querySelector(newDestinationSelector);
    destinationElement.append(ele);
    ele.scrollIntoView({ behavior: "smooth" });
  }
}

class Component {
  constructor(hostElementId, insertBefore = false) {
    if (hostElementId) {
      this.hostElementId = document.getElementById(hostElementId);
    } else {
      this.hostElementId = document.body;
    }
    this.insertBefore = insertBefore;
  }
  detach() {
    if (this.element) {
      this.element.remove();
    }
  }
  attach() {
    this.hostElementId.insertAdjacentElement(
      this.insertBefore ? "afterbegin" : "beforeend",
      this.element
    );
  }
}

class Tooltip extends Component {
  constructor(isActive, text, hostId) {
    super(hostId);
    this.closeNotifier = isActive;
    this.text = text;
    this.create();
  }

  closeTooltip = () => {
    this.detach();
    this.closeNotifier();
  };

  create() {
    const tooltipEl = document.createElement("div");
    tooltipEl.className = "card";
    // tooltipEl.innerHTML = `
    //   <h2>More Info</h2>
    //   <p>${this.text}</p>
    // `;

    //Using template tag
    const tempEl = document.getElementById("temp");
    const tempElbody = document.importNode(tempEl.content, true);
    tempElbody.querySelector("p").textContent = this.text;
    tooltipEl.append(tempElbody);

    const posTop = this.hostElementId.offsetTop;
    const posLeft = this.hostElementId.offsetLeft;
    const height = this.hostElementId.clientHeight;
    const scrollHeight = this.hostElementId.parentElement.scrollTop;

    const x = posLeft + 20;
    const y = posTop + height - scrollHeight - 10;

    tooltipEl.style.position = "absolute";
    tooltipEl.style.left = x + "px";
    tooltipEl.style.top = y + "px";

    tooltipEl.addEventListener("click", this.closeTooltip);
    this.element = tooltipEl;
  }
}

class ProjectItem {
  hasActiveTooltip = false;

  constructor(id, updateProjectListFunction, type) {
    this.id = id;
    this.updateProjectListHandler = updateProjectListFunction;
    this.connectMoreInfoBtn();
    this.connectSwitchBtn(type);
  }

  moreInfoHandler() {
    if (this.hasActiveTooltip) {
      return;
    }
    const projectElement = document.getElementById(this.id);
    const text = projectElement.dataset.extraInfo;
    const tool = new Tooltip(
      () => {
        this.hasActiveTooltip = false;
      },
      text,
      this.id
    );
    tool.attach();
    this.hasActiveTooltip = true;
  }

  connectMoreInfoBtn() {
    const projElementId = document.getElementById(this.id);
    const moreInfoBtn = projElementId.querySelector("button:first-of-type");
    moreInfoBtn.addEventListener("click", this.moreInfoHandler.bind(this));
  }

  connectSwitchBtn(type) {
    const projElementId = document.getElementById(this.id);
    let switchBtn = projElementId.querySelector("button:last-of-type");
    switchBtn = DOMHelper.clearEventListners(switchBtn);
    switchBtn.textContent = type === "active" ? "Finish" : "Activate";
    switchBtn.addEventListener(
      "click",
      this.updateProjectListHandler.bind(null, this.id)
    );
  }

  update(updateProjectList, type) {
    this.updateProjectListHandler = updateProjectList;
    this.connectSwitchBtn(type);
  }
}

class ProjectList {
  projects = [];

  constructor(type) {
    this.type = type;
    const projItems = document.querySelectorAll(`#${type}-projects li`);
    for (const proj of projItems) {
      this.projects.push(
        new ProjectItem(proj.id, this.switchProject.bind(this), this.type)
      );
    }
    console.log(this.projects);
  }

  setSwitchHandlerFunction(switchHandlerFunction) {
    this.switchHandler = switchHandlerFunction;
  }

  addProject(project) {
    this.projects.push(project);
    DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
    project.update(this.switchProject.bind(this), this.type);
  }

  switchProject(projectId) {
    this.switchHandler(this.projects.find((p) => p.id === projectId));
    this.projects = this.projects.filter((p) => p.id !== projectId);
  }
}

class App {
  static init() {
    const activeProject = new ProjectList("active");
    const finishedProject = new ProjectList("finished");
    activeProject.setSwitchHandlerFunction(
      finishedProject.addProject.bind(finishedProject)
    );
    finishedProject.setSwitchHandlerFunction(
      activeProject.addProject.bind(activeProject)
    );

    const timerId = setTimeout(this.sentAnalytics, 3000);
    // document.getElementById("stop-btn").addEventListener("click", () => {
    //   clearTimeout(timerId);
    // });
  }
  static sentAnalytics() {
    const analyticsScript = document.createElement("script");
    analyticsScript.src = "assets/scripts/analytics.js";
    analyticsScript.defer = true;
    document.head.append(analyticsScript);
  }
}

App.init();
