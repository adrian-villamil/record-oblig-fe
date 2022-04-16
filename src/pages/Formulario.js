import Label from '../components/Label'
import Input from '../components/Input'

const Formulario = () => {
    return (
        <div className="formulario">
            <h1>Formulario</h1>
            <form>
                <Label for='nombre-empresa' valor='Nombre empresa:' />
                <Input tipo='text' id='nombre-empresa' /><br/>
                <Label for='nit-empresa' valor='Nit empresa:' />
                <Input tipo='text' id='nit-empresa' /><br/>
                <Label for='nombre-obligacion' valor='Nombre obligación:' />
                <Input tipo='text' id='nombre-obligacion' /><br/>
                <Label for='fecha-pago' valor='Fecha pago:' />
                <Input tipo='date' id='fecha-pago' /><br/>
                <Label for='valor' valor='Valor:' />
                <Input tipo='number' id='valor' /><br/>
                <Label for='periodo' valor='Periodo:' />
                <Input tipo='number' id='periodo' /><br/>
            </form>
        </div>
    )
}

export default Formulario