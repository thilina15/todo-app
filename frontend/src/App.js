import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getTasks, addTask, markTaskAsDone } from "./services/taskService";

const App = () => {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Fetch recent 5 tasks
  const { data: tasks = [], error, isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });

  // Mutation to add a new task
  const addTaskMutation = useMutation({
    mutationFn: addTask,
    onSuccess: () => queryClient.invalidateQueries(["tasks"]),
  });

  // Mutation to mark task as done
  const markAsDoneMutation = useMutation({
    mutationFn: markTaskAsDone,
    onSuccess: () => queryClient.invalidateQueries(["tasks"]),
  });

  const handleAddTask = (e) => {
    e.preventDefault();
    if (title && description) {
      addTaskMutation.mutate({ title, description });
      setTitle("");
      setDescription("");
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div style={{ display: "flex", padding: "20px", gap: "20px" }}>
      {/* Left Side - Task Form */}
      <div style={{ flex: 1, border: "1px solid #ddd", padding: "20px" }}>
        <h2>Add Task</h2>
        <form onSubmit={handleAddTask}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{
              display: "block",
              marginBottom: "10px",
              width: "100%",
              padding: "8px",
            }}
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            style={{
              display: "block",
              marginBottom: "10px",
              width: "100%",
              padding: "8px",
            }}
          />
          <button type="submit" style={{ padding: "8px 12px" }}>
            Add Task
          </button>
        </form>
      </div>

      {/* Right Side - Task List */}
      <div style={{ flex: 1, border: "1px solid #ddd", padding: "20px" }}>
        <h2>Recent Tasks</h2>
        {tasks.length === 0 ? (
          <p>No tasks available</p>
        ) : (
          tasks.map((task) => (
            <div
              key={task.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
                padding: "10px",
                border: "1px solid #ccc",
              }}
            >
              <span>{task.title} <br/> {task.description}</span>
              <button
                onClick={() => markAsDoneMutation.mutate({ id: task.id })}
                style={{
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  cursor: "pointer",
                }}
              >
                Done
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;
