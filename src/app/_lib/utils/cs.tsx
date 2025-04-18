import { twMerge } from 'tailwind-merge'
import clsx, { ClassArray } from 'clsx'

export const cx = (...inputs: ClassArray) => twMerge(clsx(inputs))
