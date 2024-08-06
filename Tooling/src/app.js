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
  }
}

App.init();
