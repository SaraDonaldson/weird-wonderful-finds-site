'use client'
import React, { useState } from 'react'
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
// import { toast } from "sonner"
import { z } from "zod"
import { Button } from '@/components/ui/button'

  const FormSchema = z.object({
  comment: z
    .string()
})

interface AddCommentProps{
  addNewCommentCallback: (comment:string) => void
}

function AddComment({addNewCommentCallback}: AddCommentProps) {
  const [showSubmit, setShowSubmit] = useState<boolean>(false)
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      comment: "",
    },
  })
    function onSubmit(values: z.infer<typeof FormSchema>){
      console.log("submitting comment")
         addNewCommentCallback(values.comment)
         console.log(values)
    // toast("You submitted the following values", {
    //   description: (
    //     <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
    //       <code className="text-white">{JSON.stringify(values, null, 2)}</code>
    //     </pre>
    //   ),
    // })
        form.reset()
  }
 

  return (
        <div className='flex flex-col p-4 bg-slate-300 text-black'>
      
              <Form {...form} >
                {/* <form onSubmit={() => form.handleSubmit(onSubmit)} > */}
                <form onSubmit={ form.handleSubmit((data) => onSubmit(data))}>
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
                          className= "h-12 focus:h-auto dark:bg-slate-300 focus:bg-slate-200 shadow-none dark:focus-visible:ring-none dark:focus:border-slate-700 border-slate-400"
                          onFocus={()=> setShowSubmit(true)}
                          onBlur={()=> setShowSubmit(false)}
                          />
                        </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                  />
                  {  showSubmit &&
                    <Button 
                      type='submit'
                      className={`inline-flex items-center px-4 py-2 bg-violet-brand dark:bg-slate-700 text-slate-100 
                    rounded-md text-sm font-medium hover:bg-violet-brand/90 dark:hover:bg-slate-600
                    focus:outline-none focus:dark:bg-slate-400 disabled:opacity-50 cursor-pointer`}
                      >add comment</Button>
                  }
                </form>
            </Form>

      </div>
  )
}

export default AddComment