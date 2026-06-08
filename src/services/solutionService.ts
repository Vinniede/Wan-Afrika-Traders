import { solutions } from '../data/solutions';
import type { Solution } from '../types';

export const solutionService = {
  // Get all solutions
  async getSolutions(): Promise<Solution[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(solutions);
      }, 100);
    });
  },

  // Get single solution by ID
  async getSolutionById(id: string): Promise<Solution | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const solution = solutions.find(s => s.id === id);
        resolve(solution || null);
      }, 100);
    });
  },

  // Search solutions
  async searchSolutions(query: string): Promise<Solution[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const searchTerm = query.toLowerCase();
        const results = solutions.filter(
          s =>
            s.title.toLowerCase().includes(searchTerm) ||
            s.description.toLowerCase().includes(searchTerm)
        );
        resolve(results);
      }, 100);
    });
  },
};


