export default function BookingIframe() {
  return (
    <div style={{ 
        width: '100%', 
        height: '700px', // Ajuste conforme necessário
        overflow: 'hidden',
        border: 'none'
    }}>
      <iframe
        src="https://www.planity.com/bg-barbershop-78650-beynes"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        title="Agendamento"
        allow="geolocation; camera; microphone"
      />
    </div>
  );
}
