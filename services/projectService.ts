import { Project, projects } from '@/data/projects';

// Future .NET Web API endpoints
// const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.keendavid.com';

// Service interface for future .NET Web API integration
export interface ProjectService {
  getAllProjects(): Promise<Project[]>;
  getProjectById(id: string): Promise<Project | null>;
  getProjectsByTechnology(tech: string): Promise<Project[]>;
}

// Current implementation using local data
// Will be replaced with actual API calls to .NET Web API
class LocalProjectService implements ProjectService {
  async getAllProjects(): Promise<Project[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // Future implementation will be:
    // const response = await fetch(`${API_BASE_URL}/api/projects`);
    // if (!response.ok) {
    //   throw new Error('Failed to fetch projects');
    // }
    // return response.json();
    
    return projects;
  }

  async getProjectById(id: string): Promise<Project | null> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // Future implementation will be:
    // const response = await fetch(`${API_BASE_URL}/api/projects/${id}`);
    // if (response.status === 404) {
    //   return null;
    // }
    // if (!response.ok) {
    //   throw new Error(`Failed to fetch project ${id}`);
    // }
    // return response.json();
    
    return projects.find(project => project.id === id) || null;
  }

  async getProjectsByTechnology(tech: string): Promise<Project[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // Future implementation will be:
    // const response = await fetch(`${API_BASE_URL}/api/projects/by-technology/${encodeURIComponent(tech)}`);
    // if (!response.ok) {
    //   throw new Error(`Failed to fetch projects for technology ${tech}`);
    // }
    // return response.json();
    
    return projects.filter(project => 
      project.techStack.some(stack => 
        stack.toLowerCase().includes(tech.toLowerCase())
      )
    );
  }
}

// Error handling utility for API calls
export class ApiError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public endpoint?: string
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

// Create service instance
export const projectService = new LocalProjectService();

// Utility functions for future API integration
export const handleApiError = (error: unknown, endpoint: string): never => {
  if (error instanceof Response) {
    throw new ApiError(
      `API request failed: ${error.statusText}`,
      error.status,
      endpoint
    );
  }
  
  if (error instanceof Error) {
    throw new ApiError(
      `Network error: ${error.message}`,
      undefined,
      endpoint
    );
  }
  
  throw new ApiError(
    'Unknown error occurred',
    undefined,
    endpoint
  );
};

// Future .NET Web API integration patterns:
// 
// 1. Authentication with JWT tokens:
// const getAuthHeaders = () => ({
//   'Authorization': `Bearer ${getAccessToken()}`,
//   'Content-Type': 'application/json',
// });
//
// 2. POST request for creating projects:
// export const createProject = async (project: Omit<Project, 'id'>): Promise<Project> => {
//   const response = await fetch(`${API_BASE_URL}/api/projects`, {
//     method: 'POST',
//     headers: getAuthHeaders(),
//     body: JSON.stringify(project),
//   });
//   
//   if (!response.ok) {
//     handleApiError(response, '/api/projects');
//   }
//   
//   return response.json();
// };
//
// 3. PUT request for updating projects:
// export const updateProject = async (id: string, project: Partial<Project>): Promise<Project> => {
//   const response = await fetch(`${API_BASE_URL}/api/projects/${id}`, {
//     method: 'PUT',
//     headers: getAuthHeaders(),
//     body: JSON.stringify(project),
//   });
//   
//   if (!response.ok) {
//     handleApiError(response, `/api/projects/${id}`);
//   }
//   
//   return response.json();
// };
//
// 4. DELETE request for removing projects:
// export const deleteProject = async (id: string): Promise<void> => {
//   const response = await fetch(`${API_BASE_URL}/api/projects/${id}`, {
//     method: 'DELETE',
//     headers: getAuthHeaders(),
//   });
//   
//   if (!response.ok) {
//     handleApiError(response, `/api/projects/${id}`);
//   }
// };