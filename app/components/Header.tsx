
interface Props {
    title: string,
}


const Header = ({title = ''}: Props) => {
  return (
    <header className="py-14 ">
        <h2>{title}</h2>
    </header>
  )
}

export default Header