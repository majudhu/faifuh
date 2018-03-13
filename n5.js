function patas(n1, n2, n3, n4, n5) {
    if (n1 > n2 && n1 > n3 && n1 > n4 && n1 > n5) {
        m1 = n1;
        n1 = n2;
        n2 = n3;
        n3 = n4;
        n4 = n5;
    } else if (n2 > n3 && n2 > n4 && n2 > n5) {
        m1 = n2;
        n2 = n3;
        n3 = n4;
        n4 = n5;
    } else if (n3 > n4 && n3 > n5) {
        m1 = n3;
        n3 = n4;
        n4 = n5;
    } else if (n4 > n5) {
        m1 = n4;
        n4 = n5;
    } else {
        m1 = n5;
    }
    
    if (n1 > n2 && n1 > n3 && n1 > n4) {
        m2 = n1;
        n1 = n2;
        n2 = n3;
        n3 = n4;
    } else if (n2 > n3 && n2 > n4) {
        m2 = n2;
        n2 = n3;
        n3 = n4;
    } else if (n3 > n4) {
        m2 = n3;
        n3 = n4;
    } else {
        m2 = n4;
    }
    
    if (n1 > n2 && n1 > n3) {
        m3 = n1;
        n1 = n2;
        n2 = n3;
    } else if (n2 > n3) {
        m3 = n2;
        n2 = n3;
    } else {
        m3 = n3;
    }
    
    if (n1 > n2) {
        m4 = n1;
        n1 = n2
    } else {
        m4 = n2;
    }
    m5 = n1
    
    return ([m1,m2,m3,m4,m5]);
}