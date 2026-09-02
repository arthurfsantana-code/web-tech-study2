import './CarroCard.css'

function CarroCard() {
  const carro = {
    marca: 'Porsche',
    modelo: '911 GT3',
    ano: 2023,
    motor: 'Boxer 4.0L',
    potencia: '510 cv',
    cor: 'Cinza',
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
