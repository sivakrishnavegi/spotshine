import { cn } from '@/lib/utils';
import { Attendee } from '@prisma/client';
import React from 'react'

type UserInfoCardProps = {
  tags: string[];
  customer: Attendee;
  classname?: string;
}

const UserInfoCard = ({ tags , customer , classname }: UserInfoCardProps) => {
  return (
    <div className={cn(`flex flex-col w-fit text-primary p-3 pr-10 gap-3 rounded-xl border-[0.5px] border-border backdrop-blur-[20px] bg-background/10`,classname)}>
        <h3 className='font-semibold text-xs'>{customer.name}</h3>
        <p className='text-sm'>{customer.email}</p>
        <div className='flex gap-2 flex-wrap'>
            {tags.map((tag, index) =>{
             return (
                <span key={index} className='text-foreground px-2 py-1 text-xs rounded-md border border-border '>{tag}</span>
             )
            })}
        </div>
    </div>
  )
}

export default UserInfoCard