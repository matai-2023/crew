interface Props {
  children: React.ReactNode
}

function Background(props: Props) {
  return (
    <div className="bg-primaryBackground fixed inset-0 ">{props.children}</div>
  )
}

export default Background
