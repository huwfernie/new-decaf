import React, { useCallback, useEffect, useMemo, useState } from 'react';

// testable, move to utiliities and import here?
function combineCandidates(candidates, skillset) {
    return candidates.map((candidate) => {
        return {
            ...candidate,
            skills: skillset.filter((skill) => {
                return skill.id === candidate.id
            })
        }
    })
}

function CandidateView({ data }) {
    const [combinedData, setCombinedData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    
    const heading = useMemo(() => {
        // const data = [{id: "1", name: "one"}, {id: "2", name: "two"}];
        const heading = data.reduce((a, b) => `${a.name}, ${b.name}`); // "one, two"
        return heading;
    }, [data]);

    function loadData() {
        try {
            setLoading(true);
            const BASE_URL = "https://localhost:3000";
            const candidates = fetch(`${BASE_URL}/candidates`);
            const skillset = fetch(`${BASE_URL}/skillset`);

            Promise.all([candidates, skillset]).then((data) => {
                const candidates = data[0];
                const skillset = data[1];

                const combinedData = combineCandidates(candidates, skillset);
                setCombinedData(combinedData);
                setLoading(false)
            });
        } catch (error) {
            setError(true);
            setLoading(false);
        }
    }

    const loadDataCallback = useCallback(loadData, []);

    useEffect(() => {
        loadDataCallback();
    }, [loadDataCallback])

    return (
        <>
            <h1>{heading}</h1>
            { error && <div>Error - something went wrong</div>}            
            { !error && loading && <div>Error - something went wrong</div>}            
            { !error && !loading && <CandidateList data={combinedData} /> }
        </>
    );
}

function CandidateList({ candidates }) {
    if (candidates.length > 0) {
        candidates.map((candidate) => {
            return <Candidate key={candidate.id} data={candidate} />
        })
    } else {
        return (
            <div className="candidate">
                <h2>No candidates available</h2>
            </div>
        )
    }
}

function Candidate({ data }) {
    return (
        <div className="candidate">
            <h2>{data.name}</h2>
            <SkillList skills={data.skills} />
        </div>
    )
}

function SkillList({ skills }) {
    if (skills.length > 0) {
        skills.map((skill) => {
            return <div className="skill-item" key={skill.id} >{`${skill.name} : ${skill.id}`}</div>
        })
    } else {
        return <div className="skill-item">No Matching Skills</div>
    }
}

export default CandidateView;