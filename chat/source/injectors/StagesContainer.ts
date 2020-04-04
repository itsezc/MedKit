import { Container } from 'inversify'

import { STAGE_IDENTIFIER } from '../config/identifiers'

import Identify from '../stages/identify/Identify'
import FilterDiseases from '../stages/filterDiseases/FilterDisease'

let StageContainer = new Container()

StageContainer.bind<Identify>(STAGE_IDENTIFIER.Identify).to(Identify).inSingletonScope()
StageContainer.bind<FilterDiseases>(STAGE_IDENTIFIER.FilterDiseases).to(FilterDiseases).inSingletonScope()

export default StageContainer
