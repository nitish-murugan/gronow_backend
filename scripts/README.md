# Database Cleanup Script

This script safely removes old data from your MongoDB database.

## ⚠️ Important Safety Notice

The script is designed with safety in mind:
- By default, it only **shows** what data exists
- It does NOT delete anything unless you uncomment the deletion lines
- This prevents accidental data loss

## How to Use

### Step 1: Check Current Data
Run the script to see what's in your database:

```bash
cd backend
node scripts/cleanDatabase.js
```

This will show you:
- Number of users
- Number of products
- Number of orders
- Number of addresses

### Step 2: Delete Data (if needed)

If you want to actually delete the data:

1. Open `backend/scripts/cleanDatabase.js`
2. Find the commented lines (they start with `//`)
3. Uncomment these lines:
   ```javascript
   await User.deleteMany({});
   await Product.deleteMany({});
   await Order.deleteMany({});
   await Address.deleteMany({});
   ```
4. Save the file
5. Run the script again:
   ```bash
   node scripts/cleanDatabase.js
   ```

## What Gets Deleted

When you uncomment the deletion lines, the script will remove:
- ✅ All user accounts (except seller credentials are in .env)
- ✅ All products from the database
- ✅ All orders
- ✅ All saved addresses

## What's NOT Affected

- ❌ Your `.env` configuration
- ❌ The seller login credentials (stored in .env)
- ❌ Your application code
- ❌ The database structure (collections remain, just empty)

## After Cleanup

After running the cleanup:
1. Your database will be empty
2. Users will need to register again
3. You can add new products through the seller dashboard
4. The application will work normally with fresh data

## Restore Default Behavior

After you've deleted data and want to make the script safe again:
1. Open `cleanDatabase.js`
2. Add `//` at the start of the deletion lines to comment them out
3. Save the file

This ensures you won't accidentally delete data in the future.
