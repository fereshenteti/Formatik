import { store } from '@/store';

export const isIntersecting = ([entry]: IntersectionObserverEntry[]) => {
    /* 
    *
    * Uncomment this code below if you want to acivate the
    * intersection observer when scrolling into a section.
    * Meaning when you scroll into a section, it is detected in
    * the header to highlight the corresponding nav menu.
    * 
    */

    // if(entry?.isIntersecting){
    //     store.changeSection(`#${entry.target.id}`);
    // }
}
