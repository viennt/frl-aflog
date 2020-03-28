import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
	Typography,
	Grid
} from '@material-ui/core';
import clsx from 'clsx';

import { team } from "../../../../utils";



const useStyles = makeStyles(theme => ({

	root: {
		background: '#181818',
		textAlign: 'center',
		padding: '50px 0 0',
	},
	overlay: {
		backgroundColor: "rgba(0, 0, 0, 0.9)",
		height : '100%',
		paddingTop : '10px'
	},
	primaryText: {
		color: theme.palette.primary.dark
	},
	profile: {
		textAlign: 'center',
		padding: '0 10px 70px'
	},
	title: {
		color: theme.palette.text.contrastText,
		textAlign: 'center'
	},
	name: {
		fontSize: '16px',
		fontWeight: '800',
		lineHeight: '30px',
		textTransform: 'capitalize',
		color: theme.palette.text.contrastText
	},
	designition: {
		fontSize: '13px',
		lineHeight: '20px',
		color: theme.palette.text.grey
	},
	team: {
		textAlign: 'left'
	},
	avatar: {
		width: '187px',
		height: '187px',
		background: '#eae4c6',
		borderRadius: '50%',
		display: 'inline-flex',
		// boxShadow: '0 4px 5px 0 rgba(0, 0, 0, 0.14)',
	},
	vision: {
		height: '600px',
		backgroundImage: 'url("/images/team1.png")',
		backgroundColor: '#000',
		backgroundSize: 'cover',
		backgroundPosition: 'top center'
	},
	subTitle: {
		color: '#eee',
		width: '70%',
		margin: '0 auto'
	}
}))

const Team = ({
}) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>

			<div className={classes.team}>
				<Typography variant={"h2"} className={clsx(classes.title, 'mb5')}>
					Our {' '} <span className={classes.primaryText}> Team </span>
				</Typography>
				<Grid
					container
					justify={'center'}
				>
					<Grid
						item
						xs={12}
						lg={10}
						container
						justify={'center'}
					>
						{
							team.map((item, index) => {
								return (
									item.image ? (
										<div className={classes.profile}>
											<img
												onMouseOver={e => { e.target.src = item.imgage_hover; }}
												onMouseOut={e => { e.target.src = item.image; }}
												src={item.image}
												alt={item.name}
												className={classes.avatar}
											/>
											<Typography component={'p'} className={classes.name}>
												{item.name}
											</Typography>
											<Typography component={'p'} className={classes.designition}>
												{item.designition}
											</Typography>
										</div>
									)
										:
										<div className={classes.profile}>
											<div className={classes.avatar} />
											<Typography component={'p'} className={classes.name}>
												{item.name}
											</Typography>
											<Typography component={'p'} className={classes.designition}>
												{item.designition}
											</Typography>
										</div>
								)
							})
						}
					</Grid>
				</Grid>
			</div>
			<div className={classes.vision}>
				<div className={classes.overlay}>
				
				</div>
			</div>
		</div>
	);
};

export default Team;
