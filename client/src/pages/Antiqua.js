import React, { useEffect, useState } from 'react'

const Antiqua = () => {
	//We cannot use async/await here because react comps. must be syncronous. They must directly return a jsx. A promise will make the whole comp. hold until full response. Therefore, we can't defer the response. But, we can return a temp. value instead, i.e. a 'loading' message. Once we have a res, we want to update the ui. We do this using state.
	const [isLoading, setIsLoading] = useState(true)
	const [receivedOrders, setReceivedOrders] = useState([])

	useEffect(() => {
		setIsLoading(true)
		fetch('')
			.then((res) => {
				return res.json()
			})
			.then((data) => {
				const orders = []

				//let\s transform the obj. we received into an arr. so we can map thru it
				for (const key in data) {
					const meetup = {
						id: key,
						...data[key],
					}
					orders.push(meetup)
				}

				setIsLoading(false)
				setReceivedOrders(orders)
			})
		//the empty dependancy below makes sure that fetch o ly runs once. Adding any dependency in here i.e. isLoading, will make fetch run everytime isLoading changes. Eception: if there are external depencies i.e., URL, then put them in.
	}, [])

	if (isLoading) {
		return (
			<section>
				<h1>Loading...</h1>
			</section>
		)
	}

	return (
		<section>
			<h1>orders & Events Near You.</h1>
			{/* <MeetupList orders={receivedOrders} /> */}
		</section>
	)
}

export default Antiqua
