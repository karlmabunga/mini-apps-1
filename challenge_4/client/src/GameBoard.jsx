import React from 'react';


class GameBoard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='board'>
      <table>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
        </tr>
        <tr>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
        </tr>
        <tr>
          <td>9</td>
          <td>10</td>
          <td>11</td>
          <td>12</td>
        </tr>
        <tr>
          <td>13</td>
          <td>14</td>
          <td>15</td>
          <td>16</td>
        </tr>
      </table>
      </div>
    )
  }
}

export default GameBoard;