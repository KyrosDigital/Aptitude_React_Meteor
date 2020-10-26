import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom'

// import utilities and helpers
import useSubscription from '../../../api/hooks/useSubscription'

export const ConversationsComponent = () => {

	const history = useHistory()

	// subscribe to Meteor publication
	const loadingMessageThreads = useSubscription('Users_Message_Threads')

	const [threads, setThreads] = useState([])

	const loadData = () => {
		const query = Message_Threads.find().fetch()
		setThreads(query)
	}

	useEffect(() => {
		if (!loadingMessageThreads) {
			loadData()
		}
	}, [loadingMessageThreads])

	return (
		<div className="ConversationsComponent">

			<div className="header">
				<h2>Conversations</h2>
				<button className="submit-btn">New Conversation</button>
			</div>

			{threads.length ? <div className="container">
				<div className="table">
					{threads.map((thread, i) => {
						return <div key={i} >
							
							<div className="headers">
								<div>Subject</div>
							</div>

							<div className="row">
								<div>{thread.subject}</div>
							</div>
							
						</div>
					})}
				</div>

				<div className="spacer"></div>
			</div>
				
			: <div>Loading ...</div>}

  	</div>
	)
};