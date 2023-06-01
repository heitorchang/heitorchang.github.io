import sqlite3


class DatabaseManager:
    def __init__(self, database_filename):
        self.connection = sqlite3.connect(database_filename)

    def __del__(self):
        self.connection.close()

    def _execute(self, statement, values=None):
        with self.connection:
            cursor = self.connection.cursor()
            cursor.execute(statement, values or [])
            return cursor

    def create_table(self, table_name, columns):
        columns_with_types = [
            f'{column_name} {data_type}'
            for column_name, data_type in columns.items()
        ]
        self._execute(
            f'''
            create table if not exists {table_name}
            ({', '.join(columns_with_types)});
            '''
        )

    def add(self, table_name, data):
        placeholders = ', '.join('?' * len(data))
        column_names = ', '.join(data.keys())
        column_values = tuple(data.values())

        self._execute(
            f'''
            insert into {table_name}
            ({column_names})
            values ({placeholders});
            ''',
            column_values,
        )

    def delete(self, table_name, criteria):
        placeholders = [f'{column} = ?' for column in criteria.keys()]
        delete_criteria = ' and '.join(placeholders)
        self._execute(
            f'''
            delete from {table_name}
            where {delete_criteria};
            ''',
            tuple(criteria.values()),
        )

    def select(self, table_name, criteria=None, order_by=None):
        criteria = criteria or {}
        query = f'select * from {table_name}'

        if criteria:
            placeholders = [f'{column} = ?' for column in criteria.keys()]
            select_criteria = ' and '.join(placeholders)
            query += f' where {select_criteria}'

        if order_by:
            query += f' order by {order_by}'

        return self._execute(
            query,
            tuple(criteria.values()),
        )
