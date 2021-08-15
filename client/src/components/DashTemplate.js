import React from 'react'
import { Card } from 'react-bootstrap'
import { Container, Row, Col } from 'react-bootstrap'
import Antiqua from '../pages/Antiqua'
// import VaccinationsController from '../../../server/api/vaccinations.controller'

const DashTemplate = ({ vaccines }) => {
	console.log(vaccines[2])
	console.log(vaccines)

	//Check total of vaccinations
	const totalVaccinations = Object.keys(vaccines).length

	return (
		<div>
			<Container
				style={{ border: '2px solid #82aab8', backgroundColor: '#b7deeb' }}>
				<Row>
					<Col xs={3} className='mb-4' key={vaccines.id}>
						<Card className='h-100 align-center m-3'>
							<Card.Body className='d-flex flex-column align-items-center'>
								<div className='d-flex flex-column mb-4 align-items-center'>
									{/* <Card.Title>{vaccine.gender}</Card.Title> */}
									<Card.Title>
										<p>
											Total number of vaccinations per page: {totalVaccinations}
										</p>
									</Card.Title>
								</div>
							</Card.Body>
						</Card>
					</Col>
				</Row>

				{/* <Antiqua /> */}
			</Container>
		</div>
	)
}

export default DashTemplate
