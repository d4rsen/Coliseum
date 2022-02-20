import React from 'react'
import { useNavigate } from 'react-router-dom'
import { components } from '../../../utils/variables'
import './Map.scss'

const Map = () => {
    const navigate = useNavigate()

    return (
        <div className="map">
            <img src="/assets/map/map.png" alt="map" className="map__img"/>
            {components.map((component, i) => (
                <div
                    onClick={() => navigate(component.link)}
                    className={component.class}
                    key={component.class}
                >
                    {component.component}
                </div>
            ))}
        </div>
    )
}

export default Map
