import React from 'react'

function getPriority(priority) {
    switch(priority)
    {
        case 0 : return "nopriority";
        case 1 : return "low";
        case 2 : return "medium";
        case 3 : return "high";
        case 4 : return "urgent";
    }
}

export default getPriority