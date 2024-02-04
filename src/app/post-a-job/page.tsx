import { jobFormSchema } from '@/lib/form-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from "zod";

const PostJobPage = () => {
    const form = useForm<z.infer<typeof jobFormSchema>>({
        resolver: zodResolver(jobFormSchema),
        defaultValues: {
            requiredSkills: []
        }
    })

    const onSubmit = (values: z.infer<typeof jobFormSchema>) => {
        console.log(values)
    }
    
  return (
    <div>PostJobPage</div>
  )
}

export default PostJobPage