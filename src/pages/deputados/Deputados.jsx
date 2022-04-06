import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import apiDeputados from '../../services/apiDeputados'

const Deputados = () => {

    const [deputados, setDeputados] = useState([])

    useEffect(() => {

        apiDeputados.get('deputados').then(resultado => {
            setDeputados(resultado.data.dados)
        })

    }, [])

    return (
        <>
            <div>Deputados</div>

            <Row>
                {deputados.map(item => (
                    <Col md={2} className="mb-3">
                        <Card>
                            <Card.Img variant="top" src={item.urlFoto} />
                        </Card>
                    </Col>
                ))}
            </Row>
        </>

    )
}

export default Deputados