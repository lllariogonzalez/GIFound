import { useEffect, useState } from "react";

export const useNearScreen = (ref, distance = "0px") => {
    const [near, setNear] = useState(false);

    useEffect(() => {
        const handleLoad = (entries, observer) => {
            const element = entries[0];
            if (element.isIntersecting) {
                setNear(true);
                observer.disconnect();
            }
        };
        const observer = new IntersectionObserver(handleLoad, {
            rootMargin: distance,
        });
        // console.log(ref);
        observer.observe(ref.current);

        return () => observer && observer.disconnect();
    }, [ref, distance]);

    return near;
};
