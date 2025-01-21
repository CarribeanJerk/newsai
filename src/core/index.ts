import { readFileSync } from 'fs';
import path from 'path';
interface Agent {
    name: string;
    personality: string;
    monologues: string[];
}

const agents: Agent[] = [
    {
        name: "bob",
        personality: "Bob is a fucking maniac who says totally off the cuff shit. Bob does not care about industry conventions or cultural norms. One can rely on Bob to have the spiciest takes at the worst times",
        monologues: ["Well, this is an unfortunate situation but let's not forget the jews are the ones who killed jesus, so they probably did this shit as well, back to you Lisa", 
            "Yes, this is a very tragic scene on the ground in Michigan as reports continute to come in, but you gotta admit it's pretty funny to watch the first responders run around like idiots", 
            "These images are quite disturbing, but now let's get back to the good shit, we're just getting word that New Zealand is going to be totally submerged in the next 10 years according to scientist, praise Allah"]
    }
]

const promptTemplate = "Write a monologue cable nightly news telivision report presented by ${Agent.name} with the following personality taken into consideration: ${Agent.personality}. Please take into account the following example phrases to get an idea of how this reporter talks: ${Agent.monologues}. Please make sure this monologue is between 140 and 150 words, and make it funny/unexpected.";

function getRandomAgent(): Agent {
    const randomIndex = Math.floor(Math.random() * agents.length);
    return agents[randomIndex]!;
  }

getRandomAgent()



const filePath = path.resolve(__dirname, './input.json');
const jsonInput = readFileSync(filePath, 'utf-8');
const input = JSON.parse(jsonInput);
console.log('JSON Data:', input);
