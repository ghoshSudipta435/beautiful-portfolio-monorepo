import { ArrowUpIcon } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        <footer className='py-6 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center'>
            <p className='text-sm text-muted-foreground'>&copy; {new Date().getFullYear()} SudiptaStite.co.in. All rights are reserved</p>
            <a href="#hero" className='p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors'>
                <ArrowUpIcon size={20}/>
            </a>
        </footer>
    )
}

export default Footer
