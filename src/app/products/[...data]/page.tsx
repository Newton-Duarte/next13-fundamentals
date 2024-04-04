type ProductProps = {
  params: {
    data: string[]
  }
}

export default function Product({ params }: ProductProps) {
  const [param1, param2, param3] = params.data
  return (
    <ul>
      <li>Param1: {param1}</li>
      <li>Param2: {param2}</li>
      <li>Param3: {param3}</li>
    </ul>
  )
}
