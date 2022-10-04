import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner/Banner";
import Dropdown from "../components/Dropdown/Dropdown";

/* Définition du style du className AproposContainer */
const AproposContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-around;
  margin: 0 55px 200px 55px;

	@media screen and (max-width: 780px) {
		margin: 0 0 150px 0;
	}
`;

/**
 *
 * @returns Pahe A propos: bannière et engagements de l'agence
 */
function Apropos() {
	const contenuFiabilite =
		"La Trinité sur Mer était un port de pêche et de cabotage à l'origine. La victoire de Tabarly dans la transat anglaise de 1964 avec le Pen-Duick 2 construit chez Costantini à la trinité, a lancé le développement de la plaisance et fait de ce port l'un des plus célèbres de la côte atlantique, avec la baie de Quiberon comme aire de jeu, bien protégé des tempêtes hivernales par la presqu'île. Aujourd'hui, le bourg, qui compte plus de 1600 habitants, est animé en permanence grâce à la présence de bateaux célèbres (IDEC à Joyon, ACTUAL à Le Blevec, SODEBO à Coville, SPINDRIFT à Richard,..) et aux entraînements d'hiver d'Octobre à Pâques.";
	const contenuRespect =
		"A l'Océane, le chemin côtier (GR34 tout de même !) est à la porte du jardin et vous amène tout de suite aux plages. Si la mer est trop basse pour se baigner, on peut attendre la marée haute en taquinant la palourde.... On peut aussi décider de continuer la marche par la pointe de Kerbihan vers Carnac et pourquoi pas jusqu'à Quiberon, ou bien retouner vers St Philibert puis Locmariaquer vers le golfe du Morbihan.";
	const contenuService = "A la trinité, on peut louer un petit bateau électrique, remonter la rivière de Crach derrière le pont et pique-niquer près du Château (abandonné) de Kervihan avant de rentrer tranquillement. On peut faire de même en kayak, ou en paddle, mais ce sera un peu plus long (compter 3h aller et retour). On peut ausi faire du paddle ou de la planche à voile devant la maison, partir vers les îles (Belle Ile, Houat, Hoedic) depuis Quiberon, ou vers le golfe depuis Locmariaquer (les îles d'Arz et l'île aux Moines sont particulièrement attirantes hors saison).";
	const contenuSecurite =
		"Saviez-vous que certains experts estiment que Locmariaquer était le (ou un des) centre(s) de la civilisation celtique ? Le nombre de mégalithes aux environs (Carnac, La Trinité, Plouharnel, Erdeven) est impressionnant, souvent dirigés vers Locmariaquer et sa table des Marchands. Visitez le musée de Carnac pour en savoir plus ! Enfin, n'oubliez pas la visite du cairn de Gavrinis (surnommée la \"chapelle sixtine\" du néolithique !), une ile du golfe joignable par bateau depuis Larmor Baden, bol d'air et découverte assurés.";

	return (
		<React.Fragment>
			<Banner page="Apropos" texte="" />
			<AproposContainer>
				<Dropdown page="apropos" titre="Le village" contenu={contenuFiabilite} />
				<Dropdown page="apropos" titre="Le chemin côtier" contenu={contenuRespect} />
				<Dropdown page="apropos" titre="La mer" contenu={contenuService} />
				<Dropdown page="apropos" titre="Le patrimoine" contenu={contenuSecurite} />
			</AproposContainer>
		</React.Fragment>
	);
}

export default Apropos;
