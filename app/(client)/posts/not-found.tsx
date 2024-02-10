import Header from "@/app/components/Header"
import Link from "next/link"

const NotFound = () => {
  return (
    <div>
        <Header title='404 - Page Not Found' tags={false} />
        <Link href="/">Return Home</Link>
    </div>
  )
}

export default NotFound