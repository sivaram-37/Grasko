import { ProjectList } from "./App/ProjectList.js";

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
    // const timerId = setTimeout(this.sentAnalytics, 3000);
    // document.getElementById("stop-btn").addEventListener("click", () => {
    //   clearTimeout(timerId);
    // });
  }
  // static sentAnalytics() {
  //   const analyticsScript = document.createElement("script");
  //   analyticsScript.src = "assets/scripts/analytics.js";
  //   analyticsScript.defer = true;
  //   document.head.append(analyticsScript);
  // }
}

App.init();
