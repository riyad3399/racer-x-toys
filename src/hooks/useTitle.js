import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Racer X Toys`;
    }, [title])
}

export default useTitle;