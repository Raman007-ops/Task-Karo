# User Flow --- Personal Todo App

This document describes the steps a user follows while using the Todo
app.

## 1. Open the App

1.  The user opens the Todo application.
2.  The app displays the user's task list.
3.  The user can review tasks and find tasks organized by deadline or
    priority.

## 2. Add a Task

1.  The user selects **Add Task**.
2.  The app displays a task form.
3.  The user enters:
    -   Task name
    -   Description
    -   Deadline
    -   Priority
4.  The user saves the task.
5.  The app adds the task to the task list.
6.  The user can open the task to view its details and notes.

## 3. View and Organize Tasks

1.  The user opens the task list.
2.  The user chooses to view or organize tasks by deadline or priority.
3.  The app displays the matching tasks in a clear order or group.
4.  The user selects a task to view its details.

## 4. Update a Task

1.  The user selects a task.

2.  The user chooses **Update Task**.

3.  The app shows three update options:

    **Option A --- Update Information**

    -   The user changes the task name and/or description.
    -   The user saves the changes.

    **Option B --- Update Deadline**

    -   The user selects a new deadline.
    -   The user saves the change.

    **Option C --- Update Priority**

    -   The user selects a new priority.
    -   The user saves the change.

4.  The app saves the selected change and displays the updated task
    details.

## 5. Mark a Task as Read

1.  The user opens a task.
2.  The user selects **Mark as Read**.
3.  The app updates the task's read status.
4.  The task list or task details reflect the new status.

## 6. Add or Review Task Notes

1.  The user opens a task.
2.  The user goes to its notes area.
3.  The user adds or edits notes.
4.  The user saves the notes.
5.  The notes remain associated with that task and can be viewed later.

## Simple Flow Summary

``` text
Open App
   |
   v
View Task List
   |
   +---- Add Task
   |        |
   |        v
   |   Enter Name, Description,
   |   Deadline and Priority
   |        |
   |        v
   |      Save
   |
   +---- Select Existing Task
            |
            +---- View Details / Notes
            |
            +---- Add or Edit Notes
            |
            +---- Mark as Read
            |
            +---- Update Task
                     |
                     +---- Update Information
                     |
                     +---- Update Deadline
                     |
                     +---- Update Priority
```

## Important Behavior

-   A task should remain saved when the user leaves the task list and
    returns.
-   Updating one part of a task should not unintentionally change its
    other details.
-   Notes should stay attached to the task they belong to.
-   The user should be able to tell which tasks have been marked as
    read.
-   Tasks should be easy to find by deadline and priority.
