import Image from 'next/image';
import team1Image from '@/images/team-1.svg';
import team2Image from '@/images/team-2.svg';

export function MatchResult() {
    return (
        <>
            <div className="widget-match-result">
                <h4>دوري أبطال أوروبا</h4>
                <div className="match-results">
                    <div className="team-item">
                        <div className="team-logo">
                            <Image 
                                src={team1Image} 
                                width={50} 
                                height={50} 
                                alt="" 
                            />
                        </div>
                        <div className="team-name">
                            CAD
                        </div>
                        <div className="team-goals">
                            1
                        </div>
                    </div>
                    <div className="team-item">
                        <div className="team-logo">
                            <Image 
                                src={team2Image} 
                                width={50} 
                                height={50} 
                                alt="" 
                            />
                        </div>
                        <div className="team-name">
                            RMA
                        </div>
                        <div className="team-goals">
                            3
                        </div>
                    </div>
                </div>
                <div className="match-comment">
                    الربع النهائي. الجزء 1 من 2
                </div>
            </div>
        </>
    );
}