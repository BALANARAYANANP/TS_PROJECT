// src/validators/userValidator.ts
import { z } from 'zod';

export const userSchema = z.object({
  name: z.string()
  .min(3, "Name must be at least 3 characters")
  .max(50, "Name must be under 50 characters")
  .regex(/^[A-Za-z\s]+$/, "Name must contain only letters and spaces")
  .trim(),
  email: 
  z.string()
  .email("Invalid email address")
  .min(5, "Email must be at least 5 characters")
  .max(100, "Email too long")
  .trim() 
  .toLowerCase(),
  age: z.number({required_error: "Age is required",
    invalid_type_error: "Age must be a number",
  })
  .int("Age must be an integer")
  .min(1, "Age must be greater than 0")
  .max(120, "Age must be under 120"),})

