# Repülőjegy lefoglaló oldal

### Kovács Alex - AUTP2E

### Discord: elekssz#8884

### 2023.05.01.

### 2 komplex lekérdezés

getPurchasesByUserId(userId: string) {
    //console.log(userId);
    return this.afs.collection<Purchase>(this.collectionName, ref => ref.where('userID', '==', userId).orderBy('price', 'desc')).valueChanges();
  }

getPriceyPurchase(userId: string) {
    //console.log(userId);
    return this.afs.collection<Purchase>(this.collectionName, ref => ref.where('userID', '==', userId).orderBy('price', 'desc').limit(1)).valueChanges();
  }
