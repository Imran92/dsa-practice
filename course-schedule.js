/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const deps = {};
    const preReqs = {};

    for ( let i = 0; i < prerequisites.length; i++ ) {
        const dependant = prerequisites[i][0];
        const preReq = prerequisites[i][1];

        if ( ! deps[ dependant ] ) {
            deps[ dependant ] = [];
        }

        deps[ dependant ].push( preReq );
    }

    const keys = Object.keys( deps );
    const visited = {};
    for ( let i = 0; i < keys.length; i++ ) {
        if ( dfsCircular( parseInt( keys[i] ), deps, visited ) ) {
            return false;
        }   
    }

    return true;
};

var dfsCircular = ( course, deps, visited ) => {
    if ( ! deps[ course ] ) {
        return false;
    }
    if ( visited[ course ] ) {
        return true;
    }

    if ( visited[ course ] === 0 ) {
        return false;
    }

    visited[ course ] = 1;

    for ( let i = 0; i < deps[course].length; i++ ) {
        if ( dfsCircular( deps[course][i], deps, visited ) ) {
            return true;
        }
    }

    visited[ course ] = 0;

    return false;
}

console.log( canFinish( 2, [[0,1],[3,1],[1,3],[3,2]] ) );

//[[0,1],[3,1],[1,3],[3,2]]
//[[1,0],[2,6],[1,7],[6,4],[7,0],[0,5]]