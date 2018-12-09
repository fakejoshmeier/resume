import React, { Component } from 'react';

import './styles/AboutMe.css';
import profile from '../assets/jmeier.jpg'

class AboutMe extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contact: false,
			sent: false,
			error: false,
		};
	}

	render() {
		return (
			<main>
				<div className='aboutMe'>
					<img src={ profile } alt="It's Me!" className="profilePic"/>
					<p className='profileText'>Arma virumque canō, Trōiae quī prīmus ab ōrīs/Ītaliam, fātō profugus, Lāvīniaque vēnit/lītora, multum ille et terrīs iactātus et altō/vī superum saevae memorem Iūnōnis ob īram;/multa quoque et bellō passūs, dum conderet urbem,/inferretque deōs Latiō, genus unde Latīnum,/Albānīque patrēs, atque altae moenia Rōmae./Mūsa, mihī causās memorā, quō nūmine laesō,/quidve dolēns, rēgīna deum tot volvere cāsūs/īnsīgnem pietāte virum, tot adīre labōrēs/impulerit. Tantaene animīs caelestibus īrae?/Urbs antīqua fuit, Tyriī tenuēre colōnī,/Karthāgō, Ītaliam contrā Tiberīnaque longē/ōstia, dīves opum studiīsque asperrima bellī,/quam Iūnō fertur terrīs magis omnibus ūnam/posthabitā coluisse Samō; hīc illius arma,/hīc currus fuit; hōc rēgnum dea gentibus esse,/sī quā Fāta sinant, iam tum tenditque fovetque./Prōgeniem sed enim Trōiānō ā sanguine dūcī/audierat, Tyriās olim quae verteret arcēs;/hinc populum lātē regem bellōque superbum/ventūrum excidiō Libyae: sīc volvere Parcās./Id metuēns, veterisque memor Sāturnia bellī,/prīma quod ad Trōiam prō cārīs gesserat Argīs—/necdum etiam causae īrārum saevīque dolōrēs</p>
				</div>
			</main>
		)
	}
}

export default AboutMe;
