import styles from './styles.module.scss';

export function RelatedCategories() {
  return (
    <div className={styles.tableContainer}>
      <table>
        <tbody>
          <tr>
            <td>
              <a href="/">Celular</a>
            </td>
            <td>
              <a href="/">Acessórios</a>
            </td>
            <td>
              <a href="/">Tablets</a>
            </td>
            <td>
              <a href="/">Notebooks</a>
            </td>
            <td>
              <a href="/">Tvs</a>
            </td>
            <td>
              <a href="/">Ver Todos</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
