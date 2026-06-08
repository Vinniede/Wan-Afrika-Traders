import { projects } from '../data/projects';
import type { Project, ProjectCategory } from '../types';

export const projectService = {
  // Get all projects
  async getProjects(): Promise<Project[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(projects);
      }, 100);
    });
  },

  // Get projects by category
  async getProjectsByCategory(category: ProjectCategory): Promise<Project[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filtered = projects.filter(p => p.category === category);
        resolve(filtered);
      }, 100);
    });
  },

  // Get single project by ID
  async getProjectById(id: string): Promise<Project | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const project = projects.find(p => p.id === id);
        resolve(project || null);
      }, 100);
    });
  },

  // Get featured projects
  async getFeaturedProjects(): Promise<Project[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(projects.slice(0, 3));
      }, 100);
    });
  },
};

