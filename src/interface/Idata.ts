export interface TotalProject {
    title: string;
    github: string;
    thumbnail: string;
    description:string;
}

export default interface DataPortfolio{
    currentProject: string;
    totalProjects: TotalProject[];
}