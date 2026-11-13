# Feature List --- Personal Todo App

This document lists what the first version of the Todo app should be
able to do. It describes the features from the user's point of view,
without deciding how they will be programmed.

## Version 1 --- Core Features

### 1. Add a Task

The user can create a task by providing:

-   **Task name:** A short title that identifies the task.
-   **Description:** More information about what needs to be done.
-   **Deadline:** The date by which the task should be completed.
-   **Priority:** How important the task is.

A task should not be saved without a task name. The other fields should
be handled according to the form's validation rules.

### 2. View Tasks

The user can see the tasks they have created and review each task's
details.

Each task should make its name, deadline, and priority easy to identify.

### 3. Organize Tasks

The user can organize or view tasks based on:

-   **Deadline:** For example, tasks due today, upcoming tasks, and
    overdue tasks.
-   **Priority:** For example, high-, medium-, and low-priority tasks.

The purpose is to help the user quickly understand what needs attention
first.

### 4. Update a Task

When the user chooses to update a task, the app will offer three
separate update options:

1.  **Update task information:** Change the task name and/or
    description.
2.  **Update deadline:** Change the task's deadline.
3.  **Update priority:** Change the task's priority.

The user should be able to choose the type of update they want without
having to edit every field.

### 5. Mark a Task as Read

The user can mark a task as read. This records that the task has been
reviewed.

> Note: "Read" is kept as requested. It is different from marking a task
> as completed. If the intended action is to indicate that the work is
> finished, the feature should instead be named **Mark as Completed**.

### 6. Add Notes to a Task

Every task has a place for notes. The user can add useful information,
reminders, or extra details related to that task.

## Later Ideas --- Not Required for Version 1

These ideas can be considered after the core application is working:

-   Mark tasks as completed.
-   Search tasks by name.
-   Filter tasks by read/unread status.
-   Recurring tasks.
-   Notifications or reminders.
-   A daily or weekly overview.

## Version 1 Completion Checklist

-   [ ] Create a task with a name, description, deadline, and priority.
-   [ ] View saved tasks and their details.
-   [ ] Organize tasks by deadline.
-   [ ] Organize tasks by priority.
-   [ ] Update task information.
-   [ ] Update a task's deadline.
-   [ ] Update a task's priority.
-   [ ] Mark a task as read.
-   [ ] Add and view notes for each task.