import React, { useState, useMemo } from 'react'

import Reminders from './info/reminders'
import { ArmyBuilder } from './input/army_builder'
import { SelectOne } from './input/select_one'
import { PrintHeader, PrintFooter, PrintUnits } from './print/print'
import { SERAPHON, SUPPORTED_FACTIONS } from 'meta/factions'
import { getArmy } from 'utils/getArmy'
import { RealmscapeFeatures } from 'army/malign_sorcery/realmscape_features'
import { SelectRealmscape } from './input/select_realmscape'

const App = () => {
  const [selections, setSelections] = useState({
    units: [] as string[],
    artifacts: [] as string[],
    battalions: [] as string[],
  })
  const [factionName, setFactionName] = useState(SERAPHON)
  const [realmscape, setRealmscape] = useState('None')
  const army = useMemo(() => getArmy(factionName), [factionName])

  return (
    <div className="d-block">
      <Header setFactionName={setFactionName} factionName={factionName} />
      <PrintHeader factionName={factionName} />
      <PrintUnits selections={selections} />

      <SelectRealmscape setValue={setRealmscape} value={realmscape} items={RealmscapeFeatures.map(x => x.name)} />
      <ArmyBuilder army={army} setSelections={setSelections} />
      <Reminders army={army} factionName={factionName} selections={selections} realmscape={realmscape} />

      <PrintFooter />
    </div>
  )
}

/**
 * Hidden when printing
 */
const Header = ({ setFactionName, factionName }) => {
  return (
    <div className="jumbotron jumbotron-fluid text-center bg-dark text-white d-print-none">
      <div className="container">
        <h1 className="display-4">Age of Sigmar Reminders</h1>
        <p className="lead mt-3">
          By Davis E. Ford -{' '}
          <a href="https://daviseford.com" target="_blank" rel="noopener noreferrer">
            daviseford.com
          </a>
        </p>

        <SelectOne items={SUPPORTED_FACTIONS} setValue={setFactionName} value={factionName} />

        <p>
          Right now, this tool offers personalized gameplay reminders for Seraphon and Gloomspite Gitz.
          <br />
          Other armies may be added if there is demand.
        </p>
      </div>
    </div>
  )
}

export default App
