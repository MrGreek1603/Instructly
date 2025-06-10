import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { cn, getSubjectColor } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

interface CompanionsListProps {
    title: string;
    companions: Companion[];
    className?: string;
}

const CompanionsList = ({title, companions, className}: CompanionsListProps) => {
    return (
        <article className={cn( 'companion-list', className)}>
            <h2 className='text-3xl font-bold'>Recent Sessions</h2>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-lg w-2/3">Lesson</TableHead>
                        <TableHead className='text-lg'>Subject</TableHead>
                        <TableHead className='text-lg text-right'>Duration</TableHead>
                       
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {companions?.map((companion) =>(
                        <TableRow key={companion.id}>
                            <TableCell>
                                <Link href={`/companion/${companion.id}`}>
                                   <div className='flex items-center gap-2'>
                                    <div className='size-[72px] flex items-center justify-center rounded-lg max-md:hidden' style={{backgroundColor: getSubjectColor(companion.subject)}}>
                                        <Image src={`/icons/${companion.subject}.svg`} alt={companion.subject} width={35} height={35} />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <p className='text-2xl font-bold'>{companion.name}</p>
                                        <p className='text-lg'>{companion.topic}</p>
                                    </div>
                                   </div>
                                </Link>
                            </TableCell>
                            <TableCell>
                                <div className='subject-badge w-fit max-md:hidden' >{companion.subject}</div>
                                <div className='flex items-center justify-center rounded-lg w-fit p-2 md:hidden' style={{backgroundColor: getSubjectColor(companion.subject)}}>
                                    <Image src={`/icons/${companion.subject}.svg`} alt={companion.subject} width={18} height={18} />
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className='flex items-center gap-2 w-full'>
                                <p className='text-2xl'>{companion.duration}{' '}<span className='max-md:hidden'>mins</span></p>
                                <Image src='/icons/clock.svg' alt='clock' width={14} height={14} className='max-md:hidden' />
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                   
                </TableBody>
            </Table>
        </article>

    )
}

export default CompanionsList