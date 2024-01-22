import {Benefits} from "./Benefits";
import {PlacesToGo} from "./PlacesToGo";
import {SubmitForm} from "./SubmitForm";
import {Prefectures} from "./Prefectures";
import {TodayToVisit} from "./TodayToVisit";

export const MainShit = () => {
    return (
        <main className={'main'}>
            <SubmitForm />
            <Benefits />
            <PlacesToGo />
            <Prefectures />
            <TodayToVisit />
        </main>
    )
}