# Pilot Backlog 

**Team 23 Members**: Blake Thomas, Darren Visak, Michael Judd, Dan Morton

## Problem Statement 

In software development, often the hardest problem of starting a project with a team is organizing how to break up the work and collaborate as a team. Furthermore, stakeholders in software projects want ways to measure how productive their team is for management issues. For these two reasons, we aim to create a project management solution called Pilot, a team based task management system focused on software engineers.

## Background Info

**Audience:** Project management can be found in virtually any environment, whether it be from software engineering, to a group project for course work. However, current project management offerings are either too simple, such as Trello simply displaying a list of todo features and their priority, or too heavy such as Microsoft’s VSTS being too unwieldy for smaller groups. Pilot aims to fill the gap between simple, lightweight listings of planned features while having the heft to enable more intricate larger scale management.

**Similar Platforms:** Some other similar platforms are Trello, Visual Studio Team Services, and Jira.

**Limitations:** 

* Visual Studio Team Services is a similar service, however you have to start paying for it after the group becomes larger than five members. This may be problematic for groups that don’t have funding to do their work.

* Trello. Does not offer the ability to do task estimation out of box and view metrics about a teams productivity on a task set. We mitigate this issue by implementing our Performance dashboards. 

* We aim to meet in the middle of these to products. Have some of the more professional features in VSTS incorporated into a more casual user experience like trello. 

**Features List**

* Task management - Task creation and management management (CRUD).
* Team management - Assigning task set to teams and tasks to individual members. 
* Project/Individual performance Dashboard - Task metrics and Burndown chart. 
* Authentication - Login / Logout

## Functional Requirements

**Personas** 

* User: First time user who is not on a team.
* Team Lead: A user who has created a team to assign a task set to. 
* Team Member: A user who is a team lead or has accepted an invitation from a team lead.

|    |                                                                                                                                                    |                                  |            | 
|----|----------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------|------------| 
| ID | Story                                                                                                                                              | Feature                          | Estimation | 
| 1  | As a user, I can be authenticated so that I can use the application.                                                                               | Authentification                 | NP         | 
| 2  | As a user, I can create a task so that I can view plan to do it.                                                                                   | Task Management                  | NP         | 
| 3  | As a user, I can view a task so that I can see the details of a task.                                                                              | Task Management                  | NP         | 
| 4  | As a user, I can update a task so that I can change a task if necessary.                                                                           | Task Management                  | NP         | 
| 5  | As a user, I can delete a task so that I can clean my task set when necessary.                                                                     | Task Management                  | NP         | 
| 6  | As a user, I can assign tasks to myself so that I can take ownership of a task                                                                     | Task Management                  | NP         | 
| 7  | As a user, I can create a team so that I can enable working with other people.                                                                     | Team Management                  | NP         | 
| 8  | As a team lead, I can invite people to my team so that I can users can collaborate.                                                                | Team Management                  | NP         | 
| 9  | As a user, I can accept invitations to join teams so that I can collaborate with other users.                                                      | Team Management                  | NP         | 
| 10 | As a team lead, I can remove people from my team so that I can remove inactive team members.                                                       | Team Management                  | NP         | 
| 11 | As a team lead, I can assign tasks to my team so that everyone in the team sees it                                                                 | Task Management                  | NP         | 
| 12 | As a team lead, I can give my team a name so that my team has an identity.                                                                         | Team Management                  | NP         | 
| 13 | As a user, I want to see my tasks presented in a virtual scrum board so that I can see the state of my task set.                                   | Task Management                  | NP         | 
| 14 | As a user, I want to change a tasks status to progress through the scrum board so that I can change the state of my task set.                      | Task management                  | NP         | 
| 15 | As a user, I can see tasks in a list view (backlog) so that I can view all my tasks at once                                                        | Task management                  | NP         | 
| 16 | As a user, I can see personal burndown based on my task set so that I can tell how completing the task set is giong                                | Individual performance dashboard | NP         | 
| 17 | As a user, I can see metrics on my task set (# started, # finished, # not started) so that I can see the distribution of statuses in the task set. | Individual performance dashboard | NP         | 
| 19 | As a team member, I can view high performers on the team so that I can praise high-performing team members.                                        | Team performance dashboard       | NP         | 
| 20 | As a team member, I can see metrics on the team task set so that I can measure team progress on tasks.                                             | Team performance dashboard       | NP         | 
| 21 | As a user, I can group tasks together under a functional requirement so that I can organize tasks.                                                 | Task Management                  | NP         | 
| 22 | As a user, I can define a functional requirement for a set of tasks so that I can use them to organize tasks.                                      | Task Management                  | NP         | 
| 23 | As a user, I can view the tasks by functional requirement in the backlog so that I can understand what tasks fall under what requirement           | Task management                  | NP         | 
| 24 | As a user, I can estimate a task so that I can estimate how much time it will take.                                                                | Task Management                  | NP         | 
| 25 | As a user, I can set “time spent” so that I can compare my estimate and generate a burndown.                                                       | Task Management                  | NP         |

## Nonfunctional Requirements 

* Will be user friendly- easily navigable, intuitive, not crowded
    * As the number of features increases during development, it will be important to keep our GUI easily navigable and intuitive. This will allow our users to have a  more productive experience while using our application. The aim of our project is to improve workflow, so an uncrowded, easy-to-use website will assist with that. Users should be able to navigate the website without confusion so they can quickly learn how to effectively use our application during a team project.
* Page persistence/socket IO 
* NGRX - State management.

