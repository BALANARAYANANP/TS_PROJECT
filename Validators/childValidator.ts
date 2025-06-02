import {z} from 'zod'

export const childSchema = z.object({

    name : z.string()
    .min(3, "Name must contain 3 letters")
    .max(15, "Name must be contain 15 letters"),
    age: z.number({ required_error : "Age is Required", invalid_type_error : "Age is must be number"}).max(100),
    userId : z.number({required_error : "UserId is Required", invalid_type_error: "UserId must be number"})
    
})