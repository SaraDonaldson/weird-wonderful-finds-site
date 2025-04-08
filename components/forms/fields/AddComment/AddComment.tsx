'use client'
import React from 'react'
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { toast } from "sonner"
import { z } from "zod"

  const FormSchema = z.object({
  comment: z
    .string()
    .max(1000, {
      message: "comment too long",
    }),
})


function AddComment() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })
    function onSubmit(data: z.infer<typeof FormSchema>) {
    toast("You submitted the following values", {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }
  return (
        <div className='flex flex-col p-4 bg-slate-300 text-black'>
      
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} 
                  className="">
                <FormField
                  control={form.control}
                  name="comment"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel />
                      <FormControl>
                         <Textarea 
                          placeholder="add comment ..." {...field} 
                          rows={5}
                          className= 'dark:bg-comment-bg dark:active:bg-comment-active-bg shadow-none border-1 border-gray-900'
                          />
                        </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                  />
                  <button 
                    type='submit'
                    className="inline-flex items-center px-4 py-2 bg-violet-brand dark:bg-slate-700 text-slate-100 
                   rounded-md text-sm font-medium hover:bg-violet-brand/90 dark:hover:bg-cyan-accent/90 
                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-accent disabled:opacity-50"
                    >add comment</button>
                </form>
            </Form>

      </div>
  )
}

export default AddComment