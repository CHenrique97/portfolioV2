export interface TotalProject {
    title: string;
    github: string;
    thumbnail: string;
}

export default interface DataPortfolio{
    currentProject: string;
    totalProjects: TotalProject[];
}