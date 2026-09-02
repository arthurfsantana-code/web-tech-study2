import './CarroCard.css'

function CarroCard() {
  const carro = {
    marca: 'Chevrolet',
    modelo: 'Camaro SS',
    ano: 2023,
    motor: 'V8 6.2L',
    potencia: '461 cv',
    cor: 'Amarelo',
  }

  return (
    <div className="carro-card">
      <h2>{carro.marca} {carro.modelo}</h2>

      <ul className="carro-info">
        <li><span>Ano:</span> {carro.ano}</li>
        <li><span>Motor:</span> {carro.motor}</li>
        <li><span>Potência:</span> {carro.potencia}</li>
        <li><span>Cor:</span> {carro.cor}</li>
      </ul>
    </div>
  )
}

export default CarroCard
